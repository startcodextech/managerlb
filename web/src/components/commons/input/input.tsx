'use client';
import React, {FC, InputHTMLAttributes, useState, FocusEvent, useRef, MouseEvent, ChangeEvent} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    fullWidth?: boolean;
    className?: string;
};

const Input: FC<Props> = (props) => {
    const {className, fullWidth, type, ...rest} = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        setFocused(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
        setFocused(false);
    }

    const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
        console.log('focus')
        setFocused(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        setFocused(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    const handleCheckboxClick = (e: MouseEvent<HTMLDivElement>) => {
        setChecked(!checked);
    }

    return (
        <>
            {type === "password" ? (<>
                <div
                    className={`cursor-text inline-block relative${fullWidth ? ' w-full' : ''} ${focused ? 'bg-gray-200' : 'bg-gray-100'} rounded-xl`}
                    onClick={handleClick}
                    onBlur={handleBlur}
                    onFocus={handleFocus}>
                    <div className="flex items-center justify-between">
                        <input ref={inputRef} {...rest}
                               type={showPassword ? 'text' : 'password'}
                               className="border-none focus:ring-0 bg-transparent px-5 py-2.5 text-base font-medium outline-none placeholder:text-gray-500 text-black"/>
                        <span onClick={handleShowPassword}
                              className="px-5 py-2.5 cursor-pointer rounded-tr-2xl rounded-br-2xl bg-transparent">
                            {showPassword ? (<>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path
                                        d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </>) : (<>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                </svg>
                            </>)}
                        </span>
                    </div>
                </div>
            </>) : (
                <>{type === 'checkbox' ? (
                    <>
                        <div className="inline-flex items-center" onClick={handleCheckboxClick}>
                            <input ref={inputRef}
                                   type="checkbox"
                                   onChange={handleCheckboxChange}
                                   checked={checked}
                                   className="hidden peer"
                            />
                            <div
                                 className={`flex items-center justify-center w-6 h-6 border-2 rounded ${checked ? 'bg-purple-blue-500 border-purple-blue-500' : 'border-grey-600'}`}>
                                {checked && (
                                    <>
                                        <svg width="24px" height="24px" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M17 5L8 15l-5-4"/>
                                        </svg>
                                    </>
                                )}
                            </div>
                            <span className="ml-2 text-gray-700 cursor-default">{rest.children}</span>
                        </div>
                    </>
                ) : (
                    <>
                        <input
                            {...rest}
                            onBlur={handleBlur}
                            className={`bg-gray-100 border-none focus:ring-0 px-5 py-2.5 text-base font-medium outline-none focus:bg-gray-200 placeholder:text-gray-500 text-black rounded-xl${fullWidth ? ' w-full' : ''} ${className}`}/>
                    </>
                )}
                </>
            )}

        </>
    )
};

export default Input;