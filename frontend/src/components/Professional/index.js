import React from 'react';

import BtnGreen from '../BtnGreen';

import './styles.css';

const customPhoto =
  'https://functions.feegow.com/load-image?licenseId=105&folder=Perfil&file=47fc1b249a5cf8cb5b40832c29fde1a6.jpg&renderMode=download';

const Professional = ({ professional, setProfessionalId }) => {
  const photo = professional.foto ? professional.foto : customPhoto;

  return (
    <div className="col-md-4">
      <div className="card_professional d-flex">
        <img className="photo_professional" src={photo} alt="professional" />
        <div className="box_professional column">
          <div className="name_professional">
            {professional.tratamento &&
              professional.tratamento + ' ' + professional.nome}
          </div>
          <div className="crm_professional">
            {professional.conselho
              ? professional.conselho + ' ' + professional.documento_conselho
              : ''}
          </div>
          <BtnGreen
            fn={() => setProfessionalId(professional.profissional_id)}
            value="AGENDAR"
          />
        </div>
      </div>
    </div>
  );
};

export default Professional;
