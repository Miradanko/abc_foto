import React from 'react';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import { ShowMoreDescription } from '../ExpansionPanel/ShowMoreDescription';
import './Tabs.scss';

export const Description = () => {
    return (
        <div>
            <div className="description">
                <div className="description_block">
                    <div className="description_block-left">
                        <h3>
                            Качество, которого заслуживают ваши фотографии
                                </h3>
                        <p>
                            24,2-мегапиксельный датчик изображения формата APS-C нового поколения обеспечивает потрясающую детализацию даже в сложных условиях съемки.
                                </p>
                        <p>
                            Камера EOS 800D мгновенно срабатывает, оснащена ярким оптическим видоискателем и позволяет вести непрерывную съемку со скоростью 6 кадров в секунду. При построении кадра на экране с переменным углом наклона, самая быстрая в мире система АФ в режиме Live View выполняет точную фокусировку всего лишь за 0,03 с.
                                </p>
                    </div>
                    <div className="description_block-right">
                        <img alt="desc-1" src='images/description/description-1.png' />
                    </div>
                </div>
                <ExpansionPanel title='Читать полностью' 
                                main={<ShowMoreDescription />}
                                classExpIcon='showMoreExpansion'
                                readMoreClass='readMore'
                />
                {/* <div className="show-more">
                    <div className="description_block designer-bg">
                        <div className="description_block-right">
                            <img alt="desc-2" src='images/description/description-2.png' />
                        </div>
                        <div className="description_block-left">
                            <h3>
                                НАСТРОЙКА КОМПОНЕНТОВ УПРАВЛЕНИЯ
                                </h3>
                            <p>
                                Жидкокристаллический дисплей камеры позволяет просматривать настройки и менять их в зависимости от условий съемки в любой момент. Важные параметры могут устанавливаться непосредственно во время фотосессии. Ничто не мешает фотографу самостоятельно приспосабливать орудие съемки к собственным потребностям.
                                </p>
                        </div>
                    </div>
                    <div className="description_wide-block">
                        <div className="description_wide-block-top">
                            <h3>
                                ТО, ЧТО НУЖНО ДЛЯ ХУДОЖЕСТВЕННОЙ СЪЕМКИ
                                </h3>
                            <p>
                                Широкие возможности фотоаппарата CANON EOS 80D делают его идеальным решением для реализации самых смелых творческих идей. Съемка на профессиональном уровне с этой моделью становится доступной даже для новичков в мире фотоискусства.
                                </p>
                        </div>
                        <div className="description_wide-block-bottom">
                            <img alt="desc-3" src='images/description/description-3.png' />
                        </div>
                    </div>
                    <div className="description_block article">
                        <div className="description_block-left">
                            <h3>
                                ДИСПЛЕЙ С РЕЖИМОМ LIVE VIEW
                                </h3>
                            <p>
                                Сенсорный дисплей, угол наклона которого можно менять в зависимости от условий работы и собственных предпочтений, обеспечивает возможность съемки качественных видеороликов практически с любого ракурса. А режим «живого просмотра» делает творческий процесс более насыщенным и интересным.
                                </p>
                        </div>
                        <div className="description_block-left">
                            <h3>
                                СИНХРОНИЗАЦИЯ ВСПЫШКИ
                                </h3>
                            <p>
                                Фотоаппарат оснащен встроенным синхронизатором вспышки, который позволяет быстро и без труда научиться художественным приемам управления освещением в фотостудии или во время уличной съемки. Для управления процессом съемки с помощью планшета или смартфона предусмотрена абсолютно бесплатная фирменная программа Connect.
                                </p>
                        </div>
                    </div>
                    <div className="description_wide-block flicker-block">
                        <div className="description_wide-block-top">
                            <h3>
                                УСТРАНЕНИЕ МЕРЦАНИЙ
                                </h3>
                            <p>
                                В режиме управления фоном функция Defocus (Расфокусировка) разглаживает фон вокруг лица, а функция Clear (Четкая съемка) обеспечивает резкость при съемке объекта и фона, что позволяет делать великолепные селфи в поездках. Селфи также можно делать в панорамном режиме, что идеально для групповых фотографий на динамичном фоне.
                                </p>
                        </div>
                        <div className="description_wide-block-bottom imgs-center">
                            <img alt="desc-4" src='images/description/description-4.png' />
                            <img alt="desc-5" src='images/description/description-5.png' />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
};