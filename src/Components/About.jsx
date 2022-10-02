import React from 'react'
import '../Styles/about.css'

const AboutInfos = () => {
    return (
        <div className="collapse-container">
            <div className="collapse">
                <div className="collapse__item">
                    <input
                        type="checkbox"
                        id="collapse-1"
                        className="collapse__checkbox"
                    />
                    <label for="collapse-1" className="collapse__header">
                        <h6 className="collapse__h6">Fiabilité</h6>
                    </label>
                    <div className="collapse__content">
                        <span className="collapse__span">
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </span>
                    </div>
                </div>
                <div className="collapse__item">
                    <input
                        type="checkbox"
                        id="collapse-2"
                        className="collapse__checkbox"
                    />
                    <label for="collapse-2" className="collapse__header">
                        <h6 className="collapse__h6">Respect</h6>
                    </label>
                    <div className="collapse__content">
                        <span className="collapse__span">
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </span>
                    </div>
                </div>
                <div className="collapse__item">
                    <input
                        type="checkbox"
                        id="collapse-3"
                        className="collapse__checkbox"
                    />
                    <label for="collapse-3" className="collapse__header">
                        <h6 className="collapse__h6">Service</h6>
                    </label>
                    <div className="collapse__content">
                        <span className="collapse__span">
                            Nos équipes se tiennent à votre disposition pour
                            vous fournir une expérience parfaite. N'hésitez pas
                            à nous contacter si vous avez la moindre question.
                        </span>
                    </div>
                </div>
                <div className="collapse__item">
                    <input
                        type="checkbox"
                        id="collapse-4"
                        className="collapse__checkbox"
                    />
                    <label for="collapse-4" className="collapse__header">
                        <h6 className="collapse__h6">Responsabilité</h6>
                    </label>
                    <div className="collapse__content">
                        <span className="collapse__span">
                            La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères de sécurité établis par nos
                            services. En laissant une note aussi bien à l'hôte
                            qu'au locataire, cela permet à nos équipes de
                            vérifier que les standards sont bien respectés. Nous
                            organisons également des ateliers sur la sécurité
                            domestique pour nos hôtes.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInfos
