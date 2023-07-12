import { testiList } from '../utils/data';

const Testimonial = () => {
    return (
        <section className="container testi">
            <span className="text-bolder">OUR VALUES</span>
            <div>
                {testiList.map((el, index) => (
                    <div key={index} className={`card ${el.bg_color}`}>
                        <img src={el.icon} alt='icon' className='icon-md' />
                        <span>{el.name}</span>
                        <p>{el.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial;