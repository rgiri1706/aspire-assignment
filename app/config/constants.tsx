export const recentTransactions = [
    {
        name: 'Hamleys',
        amount: '+ S$ 150',
        date: '20 May 2020',
        image: '/file-storage.svg',
        type: "credit",
        typeMessage: "Refund on debit card"
    },
    {
        name: 'Delta Airlines',
        amount: '- S$ 150',
        date: '20 May 2020',
        image: '/flights.svg',
        type: "debit",
        typeMessage: "Charged to debit card"
    },
    {
        name: 'Hamleys',
        amount: '+ S$ 150',
        date: '20 May 2020',
        image: '/file-storage.svg',
        type: "credit",
        typeMessage: "Cashback on debit card"
    },
]

export  const cards = [
    { id: 1, name: 'Mark Henry', expiry: '12/20', cvv: '***', freezed: false },
    { id: 3, name: 'John Smith', expiry: '09/22', cvv: '***', freezed: false },
];

export const navItemsList = [
    { href: '/', label: 'Home', icon: '/Home.svg' },
    { href: '/cards', label: 'Cards', icon: '/Card.svg' },
    { href: '/payments', label: 'Payments', icon: '/Payments.svg' },
    { href: '/credit', label: 'Credit', icon: '/Credit.svg' },
    { href: '/settings', label: 'Settings', icon: '/Account.svg' },
  ];