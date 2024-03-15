// button
// refresh shopping cart
import React from 'react';
import Axios from 'axios';


export default function RemoveItem(props) {


    async function onSubmit(event) {
        event.preventDefault();
        await Axios.delete(`http://localhost:8081/api/cart/${localStorage.sessionId}/lines/${props.productId}`);
        props.onItemRemoved();
    }


    return (
        <form onSubmit={onSubmit}>
            <button className="btn btn-danger">
                Remove
            </button>
        </form>
    );


}
