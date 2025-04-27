import Image from "next/image";

const ActionSection = ({freezeActiveCard, cardsList, activeIndex}: any) => {
    return (
        <div className="mt-8 bg-sky-blue rounded-2xl flex items-center justify-center gap-18 pt-5 pl-8 pr-8 pb-5">
            <button className="flex items-center flex-col cursor-pointer" onClick={()=> freezeActiveCard()}>
                <Image src="/Freeze-card.svg" alt="freeze" width={32} height={32} />
                <div className="text-xs text-center text-[#0C365A] mt-1.5">{cardsList[activeIndex].freezed ? 'Unfreeze card' : 'Freeze card'}</div>
            </button>
            <div className="flex items-center flex-col">
                <Image src="/limit.svg" alt="limit" width={32} height={32} />
                <div className="text-xs text-center text-[#0C365A] mt-1.5">Set limit</div>
            </div>
            <div className="flex items-center flex-col">
                <Image src="/Gpay.svg" alt="gpay" width={32} height={32} />
                <div className="text-xs text-center text-[#0C365A] mt-1.5">Add GPay</div>
            </div>
            <div className="flex items-center flex-col">
                <Image src="/Replace.svg" alt="replace" width={32} height={32} />
                <div className="text-xs text-center text-[#0C365A] mt-1.5">Replace card</div>
            </div>
            <div>
                <Image src="/Deactivate.svg" alt="deactivate" width={32} height={32} />
                <div className="text-xs text-center text-[#0C365A] mt-1.5">Cancel card</div>
            </div>
        </div>
    )
}

export default ActionSection;