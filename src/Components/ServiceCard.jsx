import React, { Component } from 'react';
// import './Service.css';
function ServiceCard({img,serviceName,serviceDescription}) {
    return (  <>
<section className="service-card">
    <img src={img} />
    <h3>{serviceName}</h3>
    <p>{serviceDescription}</p>


</section>
    </>);
}

export default ServiceCard
;