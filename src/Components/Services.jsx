import serviceImage from '../img/services.jpeg'
export default function Services() {
    return (
        <div className="services">
            <div className="services-intro">
                <p className="services-heading">Services</p>
                <p className="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id nemo unde quia recusandae explicabo possimus, tempora 
                    delectus ex consequatur fuga quam assumenda quibusdam labore 
                    fugiat facere esse.</p>
            </div>
            <div className="services-content">
                <div className="services-img">
                    <img src={serviceImage} alt=""/>
                </div>
                <div className="service">
                    <div>
                        <p className="service-heading">Renting</p>
                        <p className="service-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Repellendus officia modi dolores voluptates quod esse culpa 
                             delectus rerum corporis sed alias ex, porro mollitia placeat 
                             omnis? Laborum ducimus consequuntur harum.</p>
                    </div>
                    <div>
                        <p className="service-heading">Selling</p>
                        <p className="service-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Repellendus officia modi dolores voluptates quod esse culpa 
                             delectus rerum corporis sed alias ex, porro mollitia placeat 
                             omnis? Laborum ducimus consequuntur harum. Lorem ipsum 
                             dolor sit amet consectetur adipisicing elit. Dolorem, asperiores.</p>
                    </div>
                    <div>
                        <p className="service-heading">Building</p>
                        <p className="service-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Repellendus officia modi dolores voluptates quod esse culpa 
                             delectus rerum corporis sed alias ex, porro mollitia placeat 
                             omnis? Laborum ducimus consequuntur harum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
