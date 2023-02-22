import React from "react";
import { Link} from "react-router-dom";
import { gsap } from "gsap";
import './SecondLinks.css';
export default function GameLinks() {

    const grid = document.querySelector('.grid');
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(grid, {
                '--track': '2fr',
                duration: 0.3,
            })
            gsap.to(item, {
                '--innerTrack': '1fr',
                duration: 0.3,
            })
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(grid, {
                '--track': '1fr',
                duration: 0.3,
            })
            gsap.to(item, {
                '--innerTrack': '0fr',
                duration: 0.3,
            })
        });
    });
        return (
      
            <div className="ggrriidd-game">
            
                <div className="grid">
                     {[
                    {
                        src: '/images/1.jpg',
                        title: 'Lego',
                        company: ' 이포넷'
                    },
                    {
                        src: '/images/2.jpg',
                        title: 'Shooting',
                        company: ' 이포넷'
                        },
                    {
                        src: '/images/3.jpg',
                        title: 'Run',
                        company: ' 없 음'
                    }
      
                    ].map((src) => (
                    
                    <div className="item" key={src.src}>
                        <Link  className="" to={'/'+src.title} >          
                                <p>{src.title}</p></Link>
                                <div className="img-wrapper">
                                <img className="imageClass" src={src.src} alt='cupcake on yellow background' />
                                 </div>

                        </div>
                          ))}
  </div>
 
            </div>
        );

    
}
