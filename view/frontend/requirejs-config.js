/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            changePersonType: 'TecSecret_BrazilCustomerAttributes/change-person-type',
            inputMask: 'TecSecret_BrazilCustomerAttributes/jquery.mask'
        },
    },
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-billing-address': {
                'TecSecret_BrazilCustomerAttributes/js/action/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'TecSecret_BrazilCustomerAttributes/js/action/set-shipping-information-mixin': true
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'TecSecret_BrazilCustomerAttributes/js/action/create-shipping-address-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'TecSecret_BrazilCustomerAttributes/js/action/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/create-billing-address': {
                'TecSecret_BrazilCustomerAttributes/js/action/set-billing-address-mixin': true
            }
        }
    }
};
