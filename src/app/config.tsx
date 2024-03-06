export const baseUrl      = 'http://localhost:3000/';
export const apiUrl       = 'http://wp-react.local/wp-json/wp/v2';
export const wpcf7ApiUrl  = 'http://wp-react.local/wp-json/contact-form-7/v1';
export const wpcf7Tag     = 'wpcf7-f149-p152-o1';


const WPNextConfig = async () => {
    const res = await fetch(`${apiUrl}/next-config`);
    const data = await res.json()
    return data;
}

export default WPNextConfig;