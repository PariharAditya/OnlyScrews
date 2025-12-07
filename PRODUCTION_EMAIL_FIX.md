# 🚨 Production Email Not Working - Troubleshooting Guide

## The Problem
✅ Email works in Netlify preview/deploy preview
❌ Email doesn't work on live site (www.screwbazar.com)

This usually means the environment variables are set for the **wrong context**.

---

## ✅ SOLUTION: Set Variables for Production Context

### Method 1: Direct Site Environment (RECOMMENDED)

1. Go to: https://app.netlify.com
2. Select your **screwbazar** site
3. Navigate to: **Settings** → **Build & deploy** → **Environment**
4. Look for the section that says **"Environment variables"**
5. Click **"Edit variables"**

#### Add these three variables:
```
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-16-character-app-password
QUOTE_RECIPIENT_EMAIL = screwbazar@gmail.com
```

### Method 2: Branch-Specific Variables (If needed)

If you have multiple branches:
1. In same **Environment** section
2. Look for **"Branch-specific variables"** or **"Variable scopes"**
3. Add variables for your `main` branch specifically

---

## 🔍 Verify Variables Are Set Correctly

### Check in Netlify Console:

1. Go to your site → **Deploys** tab
2. Click on the latest successful deploy
3. Look for **"Build settings"** or **"Environment"** info
4. Scroll down to see **Environment variables** section
5. Confirm you see:
   - ✅ `EMAIL_USER`
   - ✅ `EMAIL_PASS` (should show as `••••••••` for security)
   - ✅ `QUOTE_RECIPIENT_EMAIL`

If any are missing → **Add them now**

---

## 🔄 Force a Full Redeploy After Adding Variables

After adding variables:

### Option A: From Netlify Dashboard
1. Go to **Deploys** tab
2. Click the **three dots (...)** on latest deploy
3. Select **"Retry deploy"** or **"Trigger deploy"**

### Option B: From Terminal
```bash
git add .
git commit -m "Fix: Ensure production email configuration"
git push origin main
```

**Wait for the deploy to finish** (watch the Deploys tab)

---

## 📋 Checklist Before Testing

- [ ] Environment variables added in Netlify Settings
- [ ] All three variables are visible (EMAIL_USER, EMAIL_PASS, QUOTE_RECIPIENT_EMAIL)
- [ ] Site has been redeployed
- [ ] At least 2-3 minutes have passed since redeploy finished
- [ ] You're testing on `www.screwbazar.com` (not preview URL)

---

## 🧪 Test the Email

1. Go to: https://www.screwbazar.com/products
2. Click on any product → **"Request a Quote"**
3. Fill in the form with test data:
   - Name: Test User
   - Email: your-email@gmail.com
   - Phone: +91 89519 34668
   - Quantity: 10
   - Product: STS CSK Phillips
   - Material: Stainless Steel
4. Click **"Submit Quote Request"**

### Expected Results:
- ✅ No error message
- ✅ Success message shows
- ✅ Email arrives in your inbox
- ✅ Customer gets confirmation email

---

## 🆘 Still Not Working?

### Check These:

**1. Clear Browser Cache**
```
Press: Ctrl + Shift + Delete (Windows)
       Cmd + Shift + Delete (Mac)
```
- Clear "All time"
- Close and reopen browser

**2. Test on Different Browser**
- Try Chrome, Firefox, Safari
- Try incognito/private mode

**3. Check Email Spam Folder**
- Sometimes first emails go to spam
- Check your spam/junk folder

**4. Verify Gmail App Password**
- Go to: https://myaccount.google.com/apppasswords
- Make sure the password in Netlify matches exactly
- No extra spaces before/after

**5. Check Netlify Build Logs**
- Go to **Deploys** → Latest Deploy → **Deploy Log**
- Look for any error messages
- Search for "EMAIL" or "Error"

**6. Test with cURL (Advanced)**
```bash
curl -X POST https://www.screwbazar.com/api/send-quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@gmail.com",
    "phone": "+91 89519 34668",
    "quantity": "10",
    "product": "Test Product",
    "material": "Steel",
    "message": "Test quote"
  }'
```

---

## 🎯 Common Mistakes

❌ **Don't do this:**
- Setting variables in wrong section (Preview vs Production)
- Not redeploying after adding variables
- Using wrong app password format
- Forgetting to enable 2FA on Gmail first
- Testing on preview URL when variables are set for production only

✅ **Do this:**
- Set variables in **Build & deploy → Environment**
- Redeploy after any variable changes
- Copy app password directly from Google Account
- Enable 2FA on Gmail before generating app password
- Test on the actual production URL

---

## 📞 If Still Stuck

Check the **API Response** in browser:
1. Open Developer Tools (F12)
2. Go to **Console** tab
3. Submit quote form
4. Look for the response message
5. Share the exact error message

---

## ✨ Verification Once It Works

You'll know email is configured correctly when:
- ✅ Form submits without errors
- ✅ "Quote request sent successfully!" appears
- ✅ Email arrives in your inbox within 30 seconds
- ✅ Customer gets confirmation email
- ✅ No 500 errors in browser console

**Once working, your site will be complete and production-ready!** 🎉
