import React from 'react';

import Professional from '../../components/Professional';

function ListProfessional({ loading, professionals, setProfessionalId }) {
  return (
    <section>
      <div className="container">
        {loading ? (
          <div className="d-flex justify-content-center">
            <img src={process.env.PUBLIC_URL + '/loading.gif'} alt="Loading" />
          </div>
        ) : (
          <div className="row">
            {professionals.length > 0 && (
              <div className="col-md-12">
                <h2>
                  {professionals.length}{' '}
                  {professionals[0].especialidades.nome_especialidade}{' '}
                  encontrado
                  {professionals.length > 1 && 's'}
                </h2>

                <div className="row">
                  {professionals.map((professional) => (
                    <Professional
                      key={professional.profissional_id}
                      setProfessionalId={(value) => setProfessionalId(value)}
                      professional={professional}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ListProfessional;
