import React, {Component} from 'react';
import Print from '../src';
import IUImg from './IU00.jpg';

export default class Demo2 extends Component {
    render() {
        const otherStyle = `
            @media print{
                .green{
                    font-size:32px;,
                }
            }
        `;
        return (
            <div>
                <h3>This is Demo2&nbsp;&nbsp;<a href="https://github.com/hanzhangyu/rc-print/blob/master/demo/Demo2.js">code</a></h3>
                Open a new window and don`t inset Head to print something. <br />
                <button
                    onClick={() => {
                        this.refs.test.onPrint();
                    }}
                >print
                </button>
                <Print
                    ref="test" isIframe={false} insertHead={false} title="this is Demo2`s title"
                    otherStyle={otherStyle}
                >
                    <div>
                        <img src={IUImg} alt="imgTest" />
                        <p className="red">first line, we don`t have color</p>
                        <p className="green">second line, I have bigger font-size in the print`s
                            review page because of media query</p>
                        <p className="pink" style={{textDecoration: 'underline'}}>third line, I have underline but my
                            underline is come from inline style</p>
                    </div>
                </Print>
            </div>
        );
    }
}
