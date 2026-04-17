import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Google', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAzHkay_E1fG71eI9s5bWxAf9QdUObRY3MJ_T_JYyp0nW32FzmlhHzPoWXV-FpzIw4iXdCA7qrdq9LGuQ3s2EJqBx0da8Ht7P_HRTLjWGrb6xfr-nNlsRI7Nlu09bxLX5WOSniJSWaOnSNTsin0EKn45t8wTm9RK2b_TBIvyddtss37hQCnFrKdX36KUdOWcSsm9VtqnM2cxUlSGrzx4hbTjTR3wJ5AoqGQ56tdhEEWIMIeZ8UO8CXsj7VRUKuKSFrl0WUyGhtJGI' },
  { name: 'Amazon', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsXfSXKekYBS3WZvcXrpTaZsFRRrJY6UvB6yUdWeZSYdxR7ak9Rm0Nr3HFDCexxSAXWaAu4uFpFMMSUPXIgTY4FL2YkHUyhK4rrCE8Dp7vhWJ_-3pYw-3UXo5u2lHledv72yf5E0iTUygfTluwNprZ5rSEkWrgjKXdWH4TDG825-FQjNteKscep-dLUK3Nowf9n6r_Y87iBzUjbIElF6en4rOK0Svzla6r2i77x5Lc4cdmnISr8Pb5QvU1FrpP-nCkJWIloc-afmM' },
  { name: 'Microsoft', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAktcljzSofjQTTZ6-n0rSkdhAFNLilZp57LeHbcAOPOSxu1HfgkzUvyHu4VAB-vKMNiptSMJofpP6GICAo39UhgD9EO0nfBCFXAqb_t9s68xYaa769NUGvCvfjqzfObzdIsbuZdwSwjrtQU0dFfizEf1US6TpG6mi1gDHwBhJ8yioun5WPpmOhBT46ZnFAXeJy-DOwePASO5QE3YXgTwkgejZy5oZRXUyYWW9muPWUotfVsYu4bNxJgY1ClQaBcOshCEYRzAa3oFQ' },
  { name: 'Stripe', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlmely_s2FdHB7Z3cZoSQjirnH9YAJm7nk-CKmFzlUxc_9Ff4K1lD2k6jq_yGG7htoYD720wYMRp5d3_-nNx7XjHpQkDU9WWqmbe_5wtkbdh04w6yEEgoRwcB6ZuddWXrMoWAie04999ysTHQsJhHLfLm5aRKawxbziLAXicTOBxo6hsqq8UzDV-B256KCMYnLlbhSFmsuoTHbogKMLL1swB3Y1EAPmuv-3meOfsu2tjyptcDOWQNPH0A80QVFEORhUrGd21mXe48' },
  { name: 'Tesla', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJH-vmuBNlI34ifhWVkahqT5Q0QbPwF_Z5JhCMHvAbOUWxYUitgqp-sxfEe5ZHs2871BwwBy2Vp37WcGxUGu4l9NlwP481iIyx1WH6LB0o_zPuOZzMQe04X60-73VJyVEPqSJy5MGct9AFFDKldgSGrI0QztL4WZWds2AhzUeS995JkKIwxG1_cZIs2FL4_4ckF7wjEzu6DVZlGi--IJVViyf4MhZVHVGwN4RWPdQSJx4eGbIZLnMN2sJXZcY04KzS2v8bQ34oOro' },
  { name: 'Nvidia', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2EvXK2uEmWx6C8p3vqqm-_Es5jmHDGw4XCaqJWyvSCnMXwdPp8q9MQVVAcunVrTqqEZMqDCtSZjcBybsf3woznK0IblYTAeMlVFGF1sYJQiZEev2aWtlt1NvbLPhp8ogh9lUsFW_Y3rYRI_j_159jtJZtIz21Xz7UYBfNi8tuxrSCAaVv4tgoRc2FQVbXmV6vkea2UnlLaWFN61OXUKmBzSx5m8LpEjXPe8sva45w9Izg8hyTx2fDeowFCGe7oqgoLpwMh8zJ9QQ' },
  { name: 'Airbnb', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxrTxZVBRNztVYFIY8Gat-mEwj7fhwU4mUB8FJgpAJ8ZG96FteHB7Ee2TWeEtp3WDxJPpMtUHigLM1lQN1iRbcO5vONAB1Z5wYe4RUyzN867oBKETL8H0w94qWTWVKaESrnb0_u_dOr-VqexAc_ijBxIKf-5M5RZZS8PI8T5PJRghlj2jRjIgCJVtWZTe2q_olzp_4pmuznoIPd1MK27Zo3IV4hhp5Twr9xxulG1_c4BeF83kDD3VBTdqzJlWrEakCITgSn9j2VbY' },
  { name: 'Salesforce', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAxlxZOHThaBFj8iLWoXTCD7IJ46PzCDjbVFdPVKa6PtYjjGtapAy02dkztfWOtVE166qcf6dYbfm5ePJkt0bruA7PBi8y6ryWRaC0GVURnGHMATOo2PGaB5g0imJ9k_54WpECoHOnumFH44PNJINzFhcsAiZLfCUOByvEp0yu45Ec7jZZDrYpRtHGDMpQOO71tEN21zEX1lsEphyiTFS-aHmfMSDv-Sc6xzf6EX6mAmgzmUZS7VhM2nLV0FW1vN3S4SvBbPJErXA' },
  { name: 'Spotify', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9dtI0f4WkRh4HTLNMMloJBntVacZQPfkYlraeNi6vv-d8aURtv7zoRqm3ZGEFUe8EjXdPFkyWyiIz77jfcEeHluwT3Eccgy74tIldFm25Xo5YipT52yYKbodCq7Z4TnlQMCPxDPFPt6FqMpLnYaZ-GJ9ZuE-qRJHv4tjCk1NTKc5TRMyF_9nhO2ZiWzI1DZgrLzUsn92xDPAQD4kWEldG7oyx7DHwdqOLBLTQvqCOXVyrKZTdJEkSL5HmrgVai1OaS5vO94QIE04' },
  { name: 'Figma', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34alYMBzR-Iyc6YbOTf9paaWij6FcZ1aKBp0eouYyMta-fqKrFyd9EZnIJaftfbMkUQoFgTdzmFYGm95LEUcP44DQrOegvemJ4x9P7k3uznByxYUh1uRaP85e0n4qCek8N9q3hG6hPv1Uu5_XF_wBLwqlE7ijDOQrocQufuVa_NOBj6farvj-mNUCqBGxLULvAQjBrmMc-hpKrd0p3-mT0nD_j98-BYePocwWP2Pw5r0-FoLcZU01-0B80VFmwykJiQiFPNBgEXM' },
  { name: 'OpenAI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVypq3Bv4Ar7WxgKQwa8NlAY_rw6PgQ5Ecz2OcrRijwtuJuLchhJM6qCUEasOvi7NHmnHyCoylSsSaqYq5_ww7UzF8LV8kOMnwFAx1KBE1sRp0l-p07R5tRgDCfd8RJVLqJ0x8DH0Y3V8XzEwWs0vXN7SiUORrzsNMtOy5npkxz5qINQa0HpieQRbi8o6kL0b15Zj7PHnRN4jnNFIu8o-jRVLxujnmEUKS3ECuqfkhGSPpC6sLtUY54J3cw5HZrDXJLZITps3TX4A' },
  { name: 'Anthropic', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgzP_zxgxTVrPfZz2rdQxWnOQzjN7b4ZcK5Y5MuCSSY8lPKtxmoVzUobxedt-I_GR0q84xUjnwKlM0Wvp2XQJaW_vUL9oF5LWIepUqHScJIp4IXtOaHmYvTHMvRu59i0Ciz9JZdkdSlPgW0uJABFhkH2iQQirJVpJfJTwdwqqRhz_9kNNeqF_s86lkb7KTbQKbRKZWBerFFhUjB0ilc6UEtYXEpL0vamaPLNwhvuBqge-wagC1WmlXz2x2iBAYDR5Ch9BApy5whJ0' }
];

export function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm tracking-[0.2em] uppercase text-[#0B1628]/60 mb-6 block">Our Global Network</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0B1628] leading-tight">
            Forging paths with <br />
            <span className="text-[#C8942A] italic">industry leaders.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-[#C8942A]/15 bg-white"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="aspect-square flex items-center justify-center p-12 border-b border-r border-[#C8942A]/15 group hover:bg-white transition-all duration-500"
            >
              <img 
                alt={partner.name} 
                className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 w-24 h-auto" 
                src={partner.logo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
