'use client';

import Image from "next/image";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useState, useRef, useEffect } from "react";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import ActionSection from "../ActionsSection/ActionSection";

const DetailsSection = ({cardsList, setCardsList}: {cardsList: any, setCardsList: any}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);


    //applied snap scroll

    useEffect(() => {
        const handleScroll = () => {
          if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(newIndex);
          }
        };
    
        const container = scrollRef.current;
        if (container) {
          container.addEventListener('scroll', handleScroll);
          return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const [showFreezePopup, setShowFreezePopup] = useState(false);

    const freezeActiveCard = () => {
    const activeCard = cardsList[activeIndex];
    if (activeCard) {
        const updatedCard = { ...activeCard, freezed: !activeCard.freezed };
        const updatedCardsList = [...cardsList];
        updatedCardsList[activeIndex] = updatedCard;
        setCardsList(updatedCardsList);
        setShowFreezePopup(true); // Show the popup
    }
    };

    return (
        <div className="bg-white mt-4 rounded-lg shadow-md pl-14 pr-14 pt-8 pb-8 flex gap-11 border-t border-gray-200">
            {showFreezePopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
                <div className="bg-white rounded-lg shadow-md p-4 w-80">
                <h2 className="text-lg font-bold mb-2">{cardsList[activeIndex].freezed ? 'Freeze Card' : 'UnFreeze Card'}</h2>
                <p className="text-sm text-gray-600 mb-4">Card has been successfully {cardsList[activeIndex].freezed ? 'freezed' : 'unfreezed'}.</p>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowFreezePopup(false)}>Okay</button>
                </div>
            </div>
            )}
            <div className="flex-1">
                <div className="flex justify-end items-center">
                    <Image src="/eye.svg" alt="eye" width={16} height={16} />
                    <span className="text-xs font-bold ml-1.5 text-green-500">Show card number</span>
                </div>
                <div className="mt-3">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory h-76 gap-3.5 lg:w-84 xl:w-134 2xl:w-144"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {cardsList.map((card: any, index: number) => (
                            <div
                                key={index + 'card'}
                                className="snap-center shrink-0 w-full mx-auto"
                            >
                                <CardsContainer card={card}/>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-2 space-x-2">
                        {cardsList.map((_: any, index: number) => (
                            <div
                                key={index + 'card-dot'}
                                className={`w-2 h-2 rounded-full ${
                                    index === activeIndex ? 'bg-green-500 w-4' : 'bg-gray-300'
                                } transition-all duration-300`}
                            />
                        ))}
                    </div>
                </div>
                <ActionSection freezeActiveCard={freezeActiveCard} cardsList={cardsList} activeIndex={activeIndex}/>
            </div>
            <div className="flex-1">
                <div className="mt-8 bg-sky-blue rounded-2xl flex justify-between p-6">
                    <div className="flex items-center gap-3">
                        <Image src="/file.svg" width={24} height={24} alt="file" />
                        <span>Card details</span>
                    </div>
                    <Image src="/down-arrow.svg" width={24} height={24} alt="arrow" />
                </div>
                <RecentTransactions />
            </div>
        </div>
    );
}
 
export default DetailsSection;