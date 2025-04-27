type Tab = {
    id: number;
    name: string;
    isActive: boolean;
}

type TabsProps = {
    tabsList: Tab[];
}

const Tabs = ({ tabsList }: TabsProps) => {
    return (
        <div className="mt-10 flex gap-10 items-center">
            {tabsList.map((tab) => (
                <div key={tab.id}>
                    <span className={tab.isActive ? "text-sm font-bold" : "text-sm opacity-30"}>{tab.name}</span>
                    <div className={tab.isActive ? "h-0.5 bg-light-blue rounded-xs mt-1" : ""}></div>
                </div>
            ))}
        </div>
    )   
}

export default Tabs;