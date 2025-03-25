import * as Yup from 'yup';

export const ApplyFormSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full name is required')
      .min(2, 'Name must be at least 2 characters')
      .matches(/^[a-zA-Z\s'-]*$/, 'Name can only contain letters, spaces, hyphens and apostrophes')
      .test(
        'no-consecutive-spaces',
        'Name cannot contain consecutive spaces',
        (value) => !value || !/\s{2,}/.test(value)
      ),
    
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format')
      .test(
        'no-disposable-email',
        'Disposable email addresses are not allowed',
        (value: string) => !/@(mailinator\.com|tempmail\.com|trashmail\.com)$/.test(value)
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
      .required('Please tell us why you should be hired')
      .min(50, 'Please write at least 50 characters')
      .max(500, 'Maximum 500 characters allowed')
      .test(
        'no-profanity',
        'Cover letter contains inappropriate words',
        (value: string) => !/(fuck|shit|bitch|asshole|cunt|dick|nigga|nigger|faggot|fag|dyke|pussy|whore|slut|tanga|bobo|tang ina|tangina|puta|putangina|putang ina|gago|inutil|titi|tite)/i.test(value)
      )
      .test(
        'meaningful-content',
        'Cover letter must contain complete sentences',
        (value: string) => /[A-Za-z0-9,.!?;:'"-]+(\s+[A-Za-z0-9,.!?;:'"-]+)+/.test(value)
      )
  });