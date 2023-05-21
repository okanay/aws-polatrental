export const Stats = () => {

    const stats = [
        {
            key: "stats-key-3",
            name: {
                text: "Milyon",
                count: 3.84
            },
            description: "Huzurla ve keyifle tamamlanmış milyonlarca km yol."
        },
        {
            key: "stats-key-2",
            name: {
                text: "Müşteri",
                count: 682
            },
            description: "İhtiyaçlarına çözüm bulunan yüzlerce mutlu müşteri."
        },
        {
            key: "stats-key-1",
            name: {
                text: "Araç",
                count: 10
            },
            description: "Sizler için sürekli güncellenen araç filosu."
        },
    ]

    return <>
        <div className="mt-8 mb-16 sm:mb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map(item => <div key={item.key} className="mx-auto flex max-w-xs flex-col gap-y-1.5 gap-x-4">
                        <dt className=" text-base leading-6 text-gray-600 font-figtree max-w-[275px]">{item.description}</dt>
                        <dd className="order-first text-3xl font-thin tracking-tight text-gray-900 sm:text-5xl font-openSans">
                            <span className={'font-plexSerif text-skin-theme-400 font-bold pr-1.5'}>{item.name.count} </span>
                            {item.name.text}
                        </dd>
                    </div>)}
                </dl>
            </div>
        </div>
    </>
}