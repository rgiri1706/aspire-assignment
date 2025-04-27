import { recentTransactions } from "@/app/config/constants";
import Image from "next/image";

const RecentTransactions = () => {
    const RecentTransactionsList = recentTransactions
    return (
        <div className="bg-[#EDFFF5] rounded-2xl">
            <div className="mt-6 border-[#F0F0F0] border-1 rounded-2xl bg-white">
                <div className="bg-sky-blue rounded-2xl flex justify-between p-6">
                    <div className="flex items-center gap-3">
                        <Image src="/transactions.svg" width={24} height={24} alt="file" />
                        <span>Recent transactions</span>
                    </div>
                    <Image src="/down-arrow.svg" width={24} height={24} alt="arrow" className="rotate-180"/>
                </div>  
                { RecentTransactionsList.map((transaction, index) => (
                    <div className="m-6 flex" key={index + 'recent'}>
                        <div className="w-12 h-12 rounded-full bg-sky-blue flex items-center justify-center">
                            <Image src={transaction.image} width={16} height={16} alt="file-storage" />
                        </div>
                        <div className="ml-3 flex flex-col w-full">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold">
                                    {transaction.name}
                                </div>
                                <div>
                                    <div className={`${transaction.type === "credit" ? "text-green" : "text-black"} text-sm font-bold`}>
                                        {transaction.amount}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1 text-[#AAAAAA] text-sm">
                                {transaction.date}
                            </div>
                            <div className="mt-3.5">
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full w-6 h-5 bg-[#325BAF] flex justify-center items-center p-2 gap-1">
                                        <Image src="/business.svg" width={16} height={16} alt="business" />
                                    </div>
                                    <span className="text-xs text-[#325BAF] font-semibold">{transaction.typeMessage}</span>
                                </div>
                            </div>
                            <hr className="my-4 border-gray-200" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="pl-24 pr-24 pt-4 pb-4 flex justify-center items-center text-xs font-bold text-green cursor-pointer">
                <div>
                    View all card transactions
                </div>
            </div>
        </div>
    )
}

export default RecentTransactions;