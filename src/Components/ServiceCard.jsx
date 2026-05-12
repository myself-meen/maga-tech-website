import React, { Component } from 'react';
function ServiceCard({img,serviceName,serviceDescription}) {
    return (  <>
<section className="service-card bg-white rounded-3xl p-5 ">
    <img src={img} className='mx-auto' />
    <h3 className='mt-4 text-xl'>{serviceName}</h3>
    <p className="mt-4 text-sm leading-7 text-slate-700">{serviceDescription}</p>


</section>
    </>);
}

export default ServiceCard
;