import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage(false)


    useEffect(() => {

        if (someValue) {

            document.querySelector('body').classList.add('dark-mode')
            document.querySelector('form').classList.add('dark-mode')
            document.querySelector('label').classList.add('dark-mode')

        } else {

            document.querySelector('body').classList.remove('dark-mode')
            document.querySelector('form').classList.remove('dark-mode')
            document.querySelector('label').classList.remove('dark-mode')


        }


    }, [someValue])


    return [someValue, setSomeValue];


}

