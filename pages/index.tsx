import QRCode from "qrcode.react"
import { useEffect, useState } from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Address from "../components/Address"
import Balance from "../components/Balance"
import ExecuteDisplay from "../components/ExecuteDisplay"
import InAppWallet from "../components/InAppWallet";
import Modal from "../components/Modal";
import Network from "../components/Network"
import Transactions from "../components/Transactions"
import { defaultToken, getInitialDetails, handleSelectedCurrencyChanged, handleSelectedToken, watchBalance, zeroAddress } from "../handlers"
import useWindowSize from '../hooks/useWindowSize'

export default function Dashboard() {
    const [address, setAddress] = useState("")
    const [network, setNetwork] = useState("")
    const [mainETHAddress, setMainETHAddress] = useState("")
    const [value, setValue] = useState("0")
    const [balance, setBalance] = useState("0")
    const [supportedTokensAndFees, setSupportedTokensAndFees] = useState([defaultToken])
    const [selectedCurrency, setSelectedCurrency] = useState(defaultToken)
    const [currencyFuncs, setCurrencyFuncs] = useState([defaultToken])
    const [txs, setTxs] = useState({})
    const [isOpen, setIsOpen] = useState(false)



    useEffect(() => {
        // get and set initial details after wallet connection
        address !== "" && getInitialDetails({address, setNetwork, setBalance, setSupportedTokensAndFees})
        // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    }, [address])

    useEffect(() => {
        setSelectedCurrency(supportedTokensAndFees[0])

    }, [supportedTokensAndFees])


    useEffect(() => {
        if(selectedCurrency.address === zeroAddress || address === zeroAddress){return}

        const int = setInterval(watchBalance(selectedCurrency.address, address, setBalance),5000)
        return () => window.clearInterval(int)
    }, [address, selectedCurrency])

    useEffect(() => {
        handleSelectedCurrencyChanged({supportedTokensAndFees,selectedCurrency, address, setBalance, setCurrencyFuncs})
    }, [selectedCurrency])


    return (
        <div className="md:flex flex-wrap justify-center items-center h-screen w-full bg-light-gray overflow-y-scroll">
            <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                <InAppWallet setTxs={setTxs} setIsOpen={setIsOpen} setAddress={setAddress} setMainETHAddress={setMainETHAddress}/>
            </Modal>
            <div className="flex flex-col justify-between h-screen w-full md:h-auto md:w-500 md:max-h-650 md:max-w-300 p-4 md:p-8 shadow-md rounded-md bg-transparent md:bg-thin-gray">
                <DetailsDisplay
                    setIsOpen={setIsOpen}
                    address={address} value={value}
                    balance={balance}
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={handleSelectedToken(supportedTokensAndFees, setSelectedCurrency)}
                    network={network}
                    options={supportedTokensAndFees}
                />
                <ExecuteDisplay
                    currencyFuncs={currencyFuncs}
                    balance={balance}
                    mainETHAddress={mainETHAddress}
                    gaslessAddress={address}
                />
                <Transactions txs={txs}/>
            </div>
        </div>
    )
}

const DetailsDisplay = ({address, balance, value, network, selectedCurrency, setSelectedCurrency, setIsOpen, options}) => {
    const { width } = useWindowSize()
    const [copied, setCopied] = useState(false)
    const isSmallScreen = width < 768
    const tokens = {}
    options = options.filter(option => {
        const notPresent = !tokens[option.address]
        tokens[option.address] = true
        return notPresent
    })

    const handleCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 500)
    }
    return (
        <>
            <div className="flex flex-wrap relative">
                <QRCode size={isSmallScreen ? 85 : 100} bgColor="rgb(112,112,112)" value={makeQrURI("ETH", address, value)} />
                <Network network={network} setIsOpen={setIsOpen} />
                <Balance balance={balance} selected={selectedCurrency} onSelect={setSelectedCurrency} options={options} />
            </div>
            <CopyToClipboard text={address} onCopy={handleCopy}>
                <Address address={address} copied={copied} />
            </CopyToClipboard>
        </>
    )
}

const coins = {
    "BTC": "bitcoin",
    "ETH": "ethereum",
    "MATIC": "polygon matic"
}

export const makeQrURI = (coin, address, amount) => {
    return encodeURI(`${coins[coin]}:${address}?amount=${amount}&label=nullsender&message=nullsender`)
}
