import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export default function HelpContact({
    helplineNumber = "",
    text = {
        callNow: "",
        whatsapp: "",
        contactTitle: "",
        contactSubtitle: ""
    }
}) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h2 className="font-semibold font-headline text-2xl">{text.contactTitle}</h2>
            <p className="text-muted-foreground text-center md:text-left">{text.contactSubtitle}</p>
            <div className="flex gap-2">
            <Button asChild>
            <a href={`tel:${helplineNumber}`}>
                <Phone className="mr-2 h-4 w-4" />
                {text.callNow}
            </a>
            </Button>
            <Button asChild variant="outline">
            <a href={`https://wa.me/${helplineNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {text.whatsapp}
            </a>
            </Button>
        </div>
        </div>
    )
}