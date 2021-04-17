class Home{
    #heading= element(by.id('mainHeading'));
    #pageHeading= element(by.xpath("//h1"));
    sendEmailHeading= element(by.xpath("//p"));
    #sendEmailButton= element(by.id("sendEmailButton"));
    #navigateToCourseButton= element(by.id("navigateToCourse"));
    #allCourseButton= element(by.xpath("//span[text()='All courses ']"));
    #AllCourseCard= element.all(by.id('courseCard'));

    /**
     * 
     * @param {int} number 
     * @returns 
     */
    buttonHeading(number) {
        return element(by.xpath("(//p)["+number+"]"));
    };

    /**
     * 
     * @param {String} mainHeading 
     */
    async heading(mainHeading) {
         await expect(this.#heading.getText()).toEqual(mainHeading);
    };

    /**
     * 
     * @param {String} pageHeading 
     */
    async pageHeading(pageHeading){
        await expect(this.#pageHeading.getText()).toEqual(pageHeading);
    };  
    /**
     * 
     * @param {int} number 
     * @param {String} emailHeadingElement 
     */
    async buttonHeading(number, emailHeadingElement){
        let selectElement=element(by.xpath("(//p)["+number+"]"));
        await expect(selectElement.getText()).toEqual(emailHeadingElement)
    };
    /**
     * 
     * @param {String} sendEmailButtonText 
     */
    async sendEmailButton(sendEmailButtonText){
       await expect(this.#sendEmailButton.getText()).toEqual(sendEmailButtonText);
       await expect(this.#sendEmailButton.isEnabled()).toEqual(true);
    };

    async navigateToCourseButton(){
        await expect(this.#navigateToCourseButton.isEnabled()).toEqual(true);
    };

    async navigateToEmail(){
        await this.#sendEmailButton.click();
    }

    async ClickOnNavigateToCourseButton(){
        await this.#navigateToCourseButton.click();
        //browser.sleep(3000);
        await this.#allCourseButton.click();
        //browser.sleep(2000);
        this.#AllCourseCard.then((courseCount)=>{
            expect(courseCount.length).toBe(1);
        })
    }
}

exports.Home=Home;