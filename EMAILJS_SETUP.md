# EmailJS Setup Instructions

Para makapag-send ng email mula sa contact form, kailangan mong i-setup ang EmailJS account.

## Steps:

1. **Create EmailJS Account**
   - Pumunta sa https://www.emailjs.com/
   - Sign up para sa free account

2. **Add Email Service**
   - Sa dashboard, pumunta sa "Email Services"
   - Click "Add New Service"
   - Piliin ang email provider mo (Gmail, Outlook, etc.)
   - Sundin ang instructions para ma-connect ang email account mo

3. **Create Email Template**
   - Pumunta sa "Email Templates"
   - Click "Create New Template"
   - Gamitin ang template na ito:
     ```
     Subject: {{subject}}
     
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - I-save ang template

4. **Get Your Credentials**
   - **Service ID**: Makikita sa "Email Services" section
   - **Template ID**: Makikita sa "Email Templates" section
   - **Public Key**: Makikita sa "Account" > "General" section

5. **Update Contact.jsx**
   - Buksan ang `src/pages/Contact.jsx`
   - Hanapin ang mga constants na ito (around line 15-17):
     ```javascript
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
     ```
   - Palitan ang `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, at `YOUR_PUBLIC_KEY` ng actual values mo

6. **Test the Form**
   - I-run ang app: `npm run dev`
   - Pumunta sa Contact page
   - Mag-send ng test message
   - Check ang email mo kung natanggap mo

## Alternative: Using Environment Variables

Kung gusto mong mas secure, pwede mong gamitin ang environment variables:

1. Gumawa ng `.env` file sa root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. I-update ang Contact.jsx:
   ```javascript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ```

---

**Note**: Ang free plan ng EmailJS ay may limit na 200 emails per month, pero sapat na yan para sa portfolio website.

