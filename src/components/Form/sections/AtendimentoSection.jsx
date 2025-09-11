import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import css from '../Form.module.scss';

const AtendimentoSection = ({ formData, updateFormData, errors }) => {
  const handleDateChange = (date) => {
    updateFormData({ dataAtendimento: date });
  };

  const handleTimeChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Atendimento na Delegacia</h3>

      {/* Campo de Data */}
      <div className={css.fieldGroup}>
        <label htmlFor="dataAtendimento">Data do atendimento:</label>
        <DatePicker
          id="dataAtendimento"
          selected={formData.dataAtendimento}
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
        {errors.dataAtendimento && (
          <span className={css.error}>{errors.dataAtendimento}</span>
        )}
      </div>

      {/* Campo de Horário */}
      <div className={css.fieldGroup}>
        <label htmlFor="horaAtendimento">Horário de chegada:</label>
        <input
          id="horaAtendimento"
          type="time"
          name="horaAtendimento"
          value={formData.horaAtendimento}
          onChange={handleTimeChange}
        />
        {errors.horaAtendimento && (
          <span className={css.error}>{errors.horaAtendimento}</span>
        )}
      </div>
    </div>
  );
};

export default AtendimentoSection;
