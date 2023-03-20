import React from 'react'

const Timer = () => {
    return (
        <div className='timer'>
            <div className="timer__container">
                <div className="timer__body">
                    <div className="timer__title">ДО КІНЦЯ АКЦІЇЇ ЗАЛИШИЛОСЬ</div>
                    <div className="timer__numbers-block">
                        <div className="timer__numbers-cell">
                            <div className="timer__number">6</div>
                            <div className="timer__text">днів</div>
                        </div>
                        <div className="timer__numbers-cell">
                            <div className="timer__number">17</div>
                            <div className="timer__text">годин</div>
                        </div>
                        <div className="timer__numbers-cell">
                            <div className="timer__number">13</div>
                            <div className="timer__text">хвилин</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer