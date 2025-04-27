"use client";

import Image from "next/image";
import Tabs from "../components/TabsSection/Tabs";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import { useState } from "react";
import NewCardModal from "../components/NewCardModal/NewCardModal";
import { cards } from "../config/constants";

const Cards = () => {
    const tabsList = [{name: "My debit cards", id: 1, isActive: true}, {name: "All company cards", id: 2, isActive: false}];
    const cardsData = cards

    const [cardsList, setCardsList] = useState(cardsData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddCard = (newCard: any) => {
      setCardsList([...cardsList, newCard]);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
    return (
        <>
           <div className="text-sm">
                Available balance
           </div>
           <div className="flex justify-between mt-2.5">
                <div className="flex gap-3 justify-center items-center">
                    <div className="rounded-sm bg-green text-white font-bold text-xs text-center pt-2 pl-3 pr-3 pb-2">S$</div>
                    <div className="text-2xl font-bold">3,000</div>
                </div>
                <div>
                    <button className="flex bg-dark-blue gap-2 rounded-sm text-white text-sm items-center pt-2 pl-3 pr-3 pb-2 font-bold" onClick={() => setIsModalOpen(true)}>
                        <Image src="/box.svg" alt="Add" width={16} height={16} />
                        <span>New Card</span>
                    </button>
                </div>
           </div>
           <Tabs tabsList={tabsList}/>
           <DetailsSection cardsList={cardsList} setCardsList={setCardsList}/>
           <NewCardModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleAddCard}
            />
        </>
    )
}

export default Cards;