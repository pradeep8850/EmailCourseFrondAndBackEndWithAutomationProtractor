'use strict';
class Email {
    #heading = element(by.id('mailHeading'));
    #sendButton = element(by.id('sendButton'));
    #restButton = element(by.id('resetButton'));
    #innerText_To= element(by.id('to'));
    #innerText_Subject= element(by.id('subject'));
    #innerText_Message=element(by.id('message'));


    async pageHeading(pageHeading){
        await expect(this.#heading.getText()).toEqual(pageHeading);
    };

    async expect_SendButton(buttonText){
        await expect(this.#sendButton.getText()).toEqual(buttonText);
        await expect(this.#sendButton.isEnabled()).toEqual(true);
    } 

    async expect_RestButton(buttonText){
        await expect(this.#restButton.getText()).toEqual(buttonText);
        await expect(this.#restButton.isEnabled()).toEqual(true);
    }

    async expect_Text(toText, subText, messText){
        await expect(this.#innerText_To.getText()).toEqual(toText);
        await expect(this.#innerText_Subject.getText()).toEqual(subText);
        await expect(this.#innerText_Message.getText()).toEqual(messText);
    }


}

exports.Email=Email;