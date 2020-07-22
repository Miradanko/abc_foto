import React from 'react';
import Dialog from './Dialog';

const Shipping = () => {
  return (
    <div className='delivery-in'>
      <div className="delivery-info">
        <div>
          <Dialog
            openDialog='Наличная'
            modalTitle='Наличная'
            main={
              <div>
                <p>Оплата наличными при получении товара возможна во всех населенных пунктах на территории Украины. </p>
                <p>Оплата производится исключительно в национальной валюте.</p>
              </div>
            }
          />
        </div>
        <div>
          <div>
            <p>Оплата наличными при получении товара</p>
          </div>
        </div>
      </div>
      <div className="delivery-info">
        <div>
          <Dialog
            openDialog='Безналичными для физических лиц'
            modalTitle='Безналичными для физических лиц'
            main={
              <div>
                <p>Оплата по безналичному расчету осуществляется следующим способом: </p>
                <p>после оформления заказа, менеджер магазина факсом или электронной почтой вышлет Вам счет-фактуру, который Вы сможете оплатить в кассе отделения любого банка или с расчетного счета Вашей фирмы. Для юридических лиц пакет всех необходимых документов предоставляется вместе с товаром.</p>
              </div>
            }
          />
        </div>
        <div>
          <div>
            <p>Оплата по безналичному расчету производится в кассе отделения любого банка или с расчетного счета Вашей фирмы</p>
            <br />
            <p>При выборе безналичного способа оплаты доставка заказа возможна после поступления средств на наш расчетный счет</p>
          </div>
        </div>
      </div>
      <div className="delivery-info">
        <div>
          <Dialog
            openDialog='Visa/MasterCard'
            modalTitle=' Visa/MasterCard'
            main={
              <div>
                <p>Вы можете оплатить заказ онлайн банковской картой* Visa и MasterCard без комиссии.</p>
                <p>Оплата с помощью платежных карт осуществляется следующим способом:</p>
                <p>во время оформления заказа на сайте, Вам будет предложено сделать выбор способа оплаты. В графе "Оплата" вам нужно выбрать «Visa/MasterCard». После этого Вы будете переадресованы на страницу системы безопасных платежей, где Вам необходимо будет подтвердить оплату.</p>
                <p>Пожалуйста, обратите внимание, получить товар, оплаченный платежной картой, может только тот клиент, чьи ФИО были указаны на сайте во время оформления заявки, поэтому при получении заказа обязательно нужно иметь при себе паспорт.</p>
                <p>*Оплата возможна только картами, выпущенными на территории Украины</p>
              </div>
            }
          />
        </div>
        <div>
          <div>
            <p>Оплата по безналичному расчету производится в кассе отделения любого банка или с расчетного счета Вашей фирмы</p>
            <br />
            <p>При выборе безналичного способа оплаты доставка заказа возможна после поступления средств на наш расчетный счет</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Shipping);