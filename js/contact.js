const elForm = document.getElementById('contact-form')
const elFormResult = document.getElementById('form-result')

const formValues = {} //JavaScript Object.


let formErrors = [] // Empty JS Array.


//listen for the submit event
elForm.addEventListener('submit', function(event){
    event.preventDefault()

    formErrors = []  // reset our errors

    const formData = new FormData(elForm)

    for (const [name, value] of formData) {
        if (!value) {
            formErrors.push(name + ' is a required field')
        } else {
            formValues[name] = value    
        }
    }

    if (formErrors.length) {
        formErrors = formErrors.map(error => `<p class="mb-0">${error}</p>`)
        
        const innerHTML = `
            <h4>Error</h4>
            ${formErrors.join('')}    
        `
        updateFormResult('alert alert-danger', innerHTML)
        
    } else {
        const innerHTML = `
            <h4>Success</h4>
            <p>Your message has been sent! Thank you</p>
        `
        updateFormResult('alert alert-success', innerHTML)
    }
    
})

function updateFormResult(className = '', innerHTML = '') {
    elFormResult.className = className
    elFormResult.innerHTML = innerHTML
}