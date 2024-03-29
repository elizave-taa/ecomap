export default {
    id: 1,
    title: "Правильно ли вы сортируете мусор?\n",
    countQuestions: 7,
    questions: [
        {
            index : 1,
            question: "Какие отходы не вредят природе?",
            explanation: "Если деревянные игрушки покрыты экологичной краской, а именно так и " + "должно быть в " +
                "случае с детскими товарами, то они разлагаются на свалке без вреда для природы. " +
                "Макулатура не вредит экологии, но ее печатная краска может выделять ядовитые вещества. Ядовитой " +
                "можно назвать и одежду из синтетических тканей: синтетика может стать причиной попадания в почву и атмосферу вредных веществ.",
            answers: [
                {
                    title: "Бытовая химия",
                    isRight: false,
                },
                {
                    title: "Деревянные игрушки",
                    isRight: true,
                },
                {
                    title: "Книги и журнылы",
                    isRight: false,
                },
                {
                    title: "Старая синтетическая одежда",
                    isRight: false,
                },
            ]
        },
        {
            index : 2,
            question: "Что из этих предметов, оставленных туристами  в лесу, будет разлагаться быстрее всего?",
            explanation: "По данным ученых, стекло, оставленное в лесу, будет разлагаться целую тысячу лет. " +
                "Срок для полиэтиленового пакета тоже приличный – около 200 лет, фольга - около 100 " +
                "Жестяная банка – в этом списке самый \"быстрый\" загрязнитель: разлагается примерно за 90 лет.",
            answers: [
                {
                    title: "Фольга",
                    isRight: false,
                },
                {
                    title: "Стеклянная бутылка",
                    isRight: false,
                },
                {
                    title: "Жестяная консервная банка",
                    isRight: true,
                },
                {
                    title: "Полиэтиленовый пакет",
                    isRight: false
                }
            ]
        },
        {
            index : 3,
            question: "Сколько деревьев нужно вырубить, чтобы получить одну тонну бумаги?",
            explanation: "Одна тонна бумаги равна примерно 20-25 деревьям. Однако экологи борются за переработку макулатуры не только " +
                "ради деревьев, но и для сохранения других ресурсов: она позволяет почти в два раза уменьшить потребление воды и энергии в процессе производства.",
            answers: [
                {
                    title: "10",
                    isRight: false,
                },
                {
                    title: "20",
                    isRight: true,
                },
                {
                    title: "30",
                    isRight: false,
                },
                {
                    title: "50",
                    isRight: false
                }
            ]
        },
        {
            index : 4,
            question: "Что из перечисленного нельзя сдавать на переработку макулатуры?",
            explanation: "Для переработки не годятся картонные поддоны для яиц. На самом деле, это даже не картон, а валяная целлюлоза, " +
                "самая последняя стадия жизни макулатуры. Сдавать на переработку также нельзя грязные бумагу и картон, чеки," +
                " бумагу для факсов, втулки от туалетной бумаги, кальку, фотографии, ламинированную бумагу, одноразовую бумажную посуду, обои, " +
                "полностью прокрашенную бумагу, у которой внутренние слои на месте разрыва и внешние имеют один цвет.",
            answers: [
                {
                    title: "Газеты",
                    isRight: false,
                },
                {
                    title: "Глянцевые журналы",
                    isRight: false,
                },
                {
                    title: "Гофрированный картон",
                    isRight: false,
                },
                {
                    title: "Картонные поддоны для яиц",
                    isRight: true
                }
            ]
        },
        {
            index : 5,
            question: "Какие предметы из перечисленных не требуют особой утилизации?",
            explanation: "Это светодиодные лампы, поскольку они не представляют опасности. Батарейки, масла и градусники, в свою" +
                " очередь, относятся к опасной группе отходов, потому что содержат вещества, представляющие угрозу для " +
                "человека и природы. ",
            answers: [
                {
                    title: "Батарейки и аккумуляторы",
                    isRight: false,
                },
                {
                    title: "Натуральные и синтезированные масла;",
                    isRight: false,
                },
                {
                    title: "Светодиодные лампочки",
                    isRight: true,
                },
                {
                    title: "Градусники",
                    isRight: false
                }
            ]
        },
        {
            index : 6,
            question: "Что из перечисленного опасно для окружающей среды, и нуждается в специальной утилизации или может быть отправлено на переработку?",
            explanation: "Техника и электроника могут содержать опасные вещества, например, ртуть и свинец. На свалке им точно не место. Экологи призывают сдавать такой мусор в специализированные пункты приема.",
            answers: [
                {
                    title: "Старый мобильный телефон",
                    isRight: true,
                },
                {
                    title: "Одежда из хлопка и льна",
                    isRight: false,
                },
                {
                    title: "Газеты",
                    isRight: false,
                },
                {
                    title: "Пищевые отходы",
                    isRight: false
                }
            ]
        },
        {
            index : 7,
            question: "Что из перечисленного обязательно нужно сделать перед сдачей мусора на переработку?",
            explanation: "Остатки пищи или напитков в стеклянной таре или упаковке \"Тетра Пак\" и дальнейшее" +
                " гниение органики сделают этот мусор непригодным для переработки. Поэтому обязательно нужно промыть тару под водой.",
            answers: [
                {
                    title: "Разобрать пластик по цветам",
                    isRight: false,
                },
                {
                    title: "Взвесить отходы",
                    isRight: false,
                },
                {
                    title: "Помыть стеклянную тару и упаковки \"Тетра Пак\"",
                    isRight: true,
                },
                {
                    title: "Почистить пыльные книги",
                    isRight: false
                }
            ]
        },

    ]
}