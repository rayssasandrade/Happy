import React from 'react';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import 'leaflet/dist/leaflet.css'
import mapMarketing from '../imgs/map-marker.svg'

import {Map, TileLayer} from 'react-leaflet'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketing} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Bahia</strong>
                    <span>Paripiranga</span>
                </footer>
            </aside>
            <Map 
                center={[-10.683899,-37.8618319]} 
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="fff"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;