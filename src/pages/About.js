import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi mauris auctor sed parturient tellus. Ultrices enim eget porttitor condimentum volutpat vel nec. Tellus montes inceptos facilisis vestibulum hendrerit aptent. Sed torquent arcu facilisis lobortis; erat ad leo? Ante ornare risus magna erat velit ante. Pellentesque mattis elit elementum est fames nullam. Posuere vestibulum ut id class eros nullam diam at bibendum.

Dictum tempor potenti scelerisque duis porttitor efficitur conubia eleifend urna. At ut parturient nam ultrices torquent facilisis sagittis. Aptent luctus mattis morbi egestas conubia. Sit sollicitudin libero pellentesque rutrum sodales pretium tellus. Sed maecenas morbi maecenas placerat eros curabitur. Aliquet venenatis duis sed nascetur bibendum; viverra consectetur. Duis iaculis proin porta habitasse natoque fermentum. Praesent facilisis platea ac penatibus sed curabitur.

Dictumst ut iaculis per arcu sagittis semper litora fringilla augue. Magnis interdum ipsum semper convallis mus conubia habitasse. Semper lobortis erat pharetra nullam iaculis nam. Est torquent dictum imperdiet class viverra. Penatibus nam bibendum integer, lectus imperdiet bibendum vestibulum proin proin. Litora scelerisque primis natoque fusce leo tortor. Nisi nascetur ullamcorper vitae ridiculus, mus vitae dapibus eros? Urna platea felis porttitor taciti, elit feugiat mi. Aliquet vulputate mus, parturient taciti commodo per.</p>
            </div>      
    </div>
  )
}

export default About;
