
export const lookup = {
    mice: {
        name: 'Mice',
        baseCost: 15,
        baseIncome: .1
    },
    rats: {
        name: 'Rats',
        baseCost: 100,
        baseIncome: .5
    },
    pigeons: {
        name: 'Pigeons',
        baseCost: 500,
        baseIncome: 4
    },
    monkeys: {
        name: 'Monkeys',
        baseCost: 3000,
        baseIncome: 10
    },
    chimps: {
        name: 'Chimps',
        baseCost: 10000,
        baseIncome: 40
    },
    undergrads: {
        name: 'Psych 101 Students',
        baseCost: 40000,
        baseIncome: 100
    },
    grads: {
        name: 'Grad Students',
        baseCost: 200000,
        baseIncome: 400
    },
    volunteers: {
        name: 'Volunteers',
        baseCost: 1666666,
        baseIncome: 6666
    }
}

export const cost = (base, owned) => {
    return Math.ceil(base * Math.pow(1.15, owned));
}