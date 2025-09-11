import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import css from '../Form.module.scss';

const VitimaLocalSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    updateFormData({ dataCrime: date });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Vítima do Crime</h3>

      <div className={css.fieldGroup}>
        <label>Quem é a vítima?</label>
        <select
          name="quemEhAVitima"
          value={formData.quemEhAVitima}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="propria">Própria pessoa</option>
          <option value="terceira">Terceira pessoa</option>
        </select>
        {errors.quemEhAVitima && (
          <span className={css.error}>{errors.quemEhAVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>Onde aconteceu o crime?</label>
        <select
          name="localCrime"
          value={formData.localCrime}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="goiania">Goiânia</option>
          <option value="outra">Outra cidade</option>
        </select>
        {errors.localCrime && (
          <span className={css.error}>{errors.localCrime}</span>
        )}
      </div>

      {formData.localCrime === 'outra' && (
        <div className={css.fieldGroup}>
          <label>Nome da outra cidade:</label>
          <input
            type="text"
            name="outraCidade"
            value={formData.outraCidade}
            onChange={handleChange}
          />
          {errors.outraCidade && (
            <span className={css.error}>{errors.outraCidade}</span>
          )}
        </div>
      )}

      <div className={css.fieldGroup}>
        <label>Endereço onde aconteceu o crime:</label>
        <input
          type="text"
          name="enderecoCrime"
          value={formData.enderecoCrime}
          onChange={handleChange}
        />
        {errors.enderecoCrime && (
          <span className={css.error}>{errors.enderecoCrime}</span>
        )}
      </div>

      {/* Novo campo: Data do crime usando DatePicker */}
      <div className={css.fieldGroup}>
        <label htmlFor="dataCrime">Data aproximada do crime:</label>
        <DatePicker
          id="dataCrime"
          selected={formData.dataCrime}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/aaaa"
          popperPlacement="bottom-start"
          popperContainer={(props) => (
            <div style={{ zIndex: 9999 }} {...props} />
          )}
          popperModifiers={[
            {
              name: 'offset',
              options: { offset: [0, 8] },
            },
            {
              name: 'preventOverflow',
              options: { escapeWithReference: false },
            },
          ]}
        />
        {errors.dataCrime && (
          <span className={css.error}>{errors.dataCrime}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>Horário aproximado do crime:</label>
        <input
          type="time"
          name="horaCrime"
          value={formData.horaCrime}
          onChange={handleChange}
        />
        {errors.horaCrime && (
          <span className={css.error}>{errors.horaCrime}</span>
        )}
      </div>
    </div>
  );
};

export default VitimaLocalSection;
