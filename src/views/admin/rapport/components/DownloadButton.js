import React, { useState } from 'react';
import { Button, Spinner } from '@chakra-ui/react';

export default function DownloadButton(props) {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);

        // Simuler un téléchargement avec un délai de 2 secondes (à remplacer par votre logique de téléchargement réel)
        setTimeout(() => {
            setDownloading(false); // Fin du téléchargement après 2 secondes (simulé)
        }, 3000);
    };

    return (
        <div>
            <Button
                height='4vh'
                
                transform='translate(0%,0%)'
                borderRadius='5px'
                bg='#008F75'
                color='white'
                fontWeight='bold'
                onClick={handleDownload}
                disabled={downloading} // Désactiver le bouton pendant le téléchargement
            >
                {downloading ? (
                    <Spinner size="sm" /> // Afficher un spinner pendant le téléchargement
                ) : (
                    'Télécharger'
                )}
                {downloading && <p fontWeight='bold'>Téléchargement...</p>}
            </Button>

        </div>
    );
}