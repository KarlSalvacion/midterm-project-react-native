import * as Yup from 'yup';

const disposableDomains = [
  'mailinator.com', 'tempmail.com', 'trashmail.com', 'guerrillamail.com',
  '10minutemail.com', 'yopmail.com', 'temp-mail.org', 'fakeinbox.com',
  'getnada.com', 'mytemp.email'
];

const disposableRegex = new RegExp(`@(${disposableDomains.join('|')})$`, 'i');

export const ApplyFormSchema = Yup.object().shape({
  fullName: Yup.string()
  .required('Full name is required')
  .min(2, 'Name must be at least 2 characters')
  .matches(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
  .test(
    'no-consecutive-spaces',
    'Name cannot contain consecutive spaces',
    (value) => !/\s{2,}/.test(value)
  )
  .test(
    'no-leading-trailing-spaces',
    'Name cannot start or end with a space',
    (value) => value === value.trim()
  )
  .test(
    'must-contain-at-least-one-letter',
    'Name must contain at least one letter',
    (value) => /[a-zA-Z]/.test(value)
  ),
 
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .test(
      'no-disposable-email',
      'Disposable email addresses are not allowed',
      (value: string) => !disposableRegex.test(value)
    )
    .test(
      'business-email-only',
      'Only business emails are allowed (no Gmail/Yahoo/Outlook)',
      (value: string) => !/(@gmail\.com|@yahoo\.com|@outlook\.com|@hotmail\.com)$/i.test(value)
    ),
  
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .test(
      'valid-format',
      'Must be a valid Philippine mobile number (e.g., 09XX XXX XXXX)',
      (value: string) => {
        if (!value) return false;
        const digits = value.replace(/[^\d+]/g, '');
        return (
          (digits.startsWith('09') && digits.length === 11) ||
          (digits.startsWith('+639') && digits.length === 13)
        );
      }
    ),
  
    coverLetter: Yup.string()
    .required('Cover letter is required to explain why you should be hired.')
    .min(50, 'Cover letter should be at least 50 characters to explain your qualifications.')
    .max(500, 'Maximum 500 characters allowed.')
    .test(
      'no-profanity',
      'Cover letter contains inappropriate words',
      (value: string) => !/\b(fuck|shit|bitch|asshole|cunt|dick|nigga|nigger|faggot|fag|pussy|whore|slut|tanga|bobo|tang ina|tangina|puta|putangina|putang ina|gago|inutil|titi|tite|boobs|tits)\b/i.test(value)
    )
    .test(
      'meaningful-content',
      'Cover letter must contain at least one complete sentence.',
      (value: string) => /([A-Za-z]+[^.!?]*[.!?])/.test(value)
    )
    .test(
      'no-random-characters',
      'Cover letter should not be mostly symbols or gibberish.',
      (value: string) => {
        if (!value) return false;

        const words = value.match(/\b[A-Za-z]{2,}\b/g) || []; 
   
        return words.length >= 5;
      }
    )
});
