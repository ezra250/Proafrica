import React from 'react';

import { SmallHeader, Navigation } from '../components/Header';
import { OrderForm } from '../components/Form';

const OrderScreen = () => (
    <div>
        <div className="orderform">
            <OrderForm/>
        </div>
        <div className="navigation">
            <Navigation bottom={true}/>
        </div>
    </div>
);

export default OrderScreen;
