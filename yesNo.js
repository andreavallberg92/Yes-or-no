const yesNoApp = () => {

    const yesNoContainer = document.querySelector('.yes-no')
    const yesNoTextContainer = yesNoContainer.querySelector('.yes-no__text')
    const yesNoImgContainer = yesNoContainer.querySelector('.yes-no__img')

    const API_URL = 'https://yesno.wtf/api'

    const getYesNo = async () => {

        const response = await fetch(API_URL)
        const data = await response.json()

        console.log(data)
        showYesNo(data)
    }

    const showYesNo = (response) => {
        
        if ( !response ) return
        
        const yesNoImage = response.image
        const yesNoText = response.answer

        if ( yesNoImage ) {
            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', yesNoImage)
            yesNoImgContainer.append(imgEl)
        }

        yesNoTextContainer.innerText = yesNoText
        
    }

    getYesNo()

}

yesNoApp()