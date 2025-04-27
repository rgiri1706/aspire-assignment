import Image from "next/image";


type CardDetails = {
    name: string;
    expiry: string;
    freezed: boolean;
}

const CardsContainer = ({ card }: { card: CardDetails }) => {
    return (
        <div className={`w-full rounded-2xl p-7 ${card.freezed ? 'bg-[#F0F0F0]' : 'bg-green'}`}>
            <div className="flex justify-end gap-2 items-center">
                <Image src="/Home.svg" alt="logo" width={23} height={23} className="text-white"/>
                <span className="text-white text-2xl">aspire</span>
            </div>
            <div className="mt-12 text-2xl font-bold text-white">
                {card.name}
            </div>
            <div className="flex items-center gap-7 mt-8">
                <span className="text-2xl text-white font-bold">• • • •</span>
                <span className="text-2xl text-white font-bold">• • • •</span>
                <span className="text-2xl text-white font-bold">• • • •</span>
                <span className="text-sm text-white font-bold">2020</span>
            </div>

            {/* Expiry and CVV */}
            <div className="flex text-sm mt-4 text-white font-bold items-center gap-9">
                <span>Thru: {card.expiry}</span>
                <span className="text-lg">CVV: ***</span>
            </div>

            {/* Visa Logo */}
            <div className="flex justify-end mt-1">
                <Image src="/Visa.svg" alt="Visa Logo" width={67} height={23} />
            </div>
        </div>
    );
}

export default CardsContainer;