
const defaultPrice = 0


function SupermarketCheckout(productRules) {
    function price(listaDeProductos) {
        let totalPrice = defaultPrice
        listaDeProductos.forEach(product => {
            let rule = productRules.find(rule => rule.name == product)
            totalPrice += rule.price;
        });
        return totalPrice
    }
    return {
        price
    }
}

describe('checkout supermarket should', () => {
    const ruleA = {
        name: "A",
        price : 50
    }
    const ruleB = {
        name: "B",
        price : 30
    }
    const tripleA = {
        name : "AAA",
        price : 130
    }
    const productRules = [
        tripleA,
        ruleA,
        ruleB
    ]

    test('whenBasketIsEmptyPriceIsZero', () => {
        var checkout = SupermarketCheckout(productRules)

        var price = checkout.price([])

        expect(price).toBe(defaultPrice);
    })

    test('whenBaskethasOneItemShouldreturnPriceForOneItem', () => {
        var checkout = SupermarketCheckout(productRules)

        var price = checkout.price([ruleA.name])

        expect(price).toBe(ruleA.price);
    })

    test('whenBaskethasOneItemShouldreturnPriceForOneItem', () => {
        var checkout = SupermarketCheckout(productRules)

        var price = checkout.price([ruleA.name, ruleB.name])

        expect(price).toBe(80);
    })

    test('whenBaskethasthreesameItemShouldreturnspecialprice', () => {
        var checkout = SupermarketCheckout(productRules)

        var price = checkout.price([ruleA.name, ruleA.name, ruleA.name])

        expect(price).toBe(130);
    })

})