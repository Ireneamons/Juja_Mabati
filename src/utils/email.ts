interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = (data: EmailData) => {
  const mailtoLink = `mailto:jujamabatiltd@gmail.com?subject=Inquiry from ${data.name}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
  window.location.href = mailtoLink;
};