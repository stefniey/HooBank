import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { clients } from "../constants";
import styles from "../styles";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (

    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
            data-aos="fade-left"
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
