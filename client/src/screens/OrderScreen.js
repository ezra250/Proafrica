import React from 'react';

import { OrderBook } from '../components/OrderBook';
import { SmallHeader, Navigation } from '../components/Header';
import { OrderForm } from '../components/Form';

const OrderScreen = () => (
    <div>
        {/* <div className="smallHeader">
            <SmallHeader/>
        </div>
        <div className="navigation">
            <Navigation/>
        </div> */}
        <div className="orderform">
            <OrderForm/>
        </div>
    </div>
);

export default OrderScreen;