import React from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, Share2, Hand } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';

export const SessionsPage: React.FC = () => {
    const [isMicOn, setIsMicOn] = React.useState(true);
    const [isCameraOn, setIsCameraOn] = React.useState(true);
    const [isHandRaised, setIsHandRaised] = React.useState(false);

    const participants = [
        { id: '1', name: 'Dr. Sarah Johnson', role: 'host', isMicOn: true, isCameraOn: true },
        { id: '2', name: 'Alex Student', role: 'participant', isMicOn: true, isCameraOn: true },
        { id: '3', name: 'Emma Wilson', role: 'participant', isMicOn: false, isCameraOn: true },
        { id: '4', name: 'Liam Chen', role: 'participant', isMicOn: true, isCameraOn: false },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Virtual Classroom</h1>
                    <p className="text-black/60">CS101 - Introduction to Computer Science</p>
                </div>

                {/* Main Video Area */}
                <Card variant="brutal" className="aspect-video bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
                    <div className="text-center">
                        <Video className="w-24 h-24 mx-auto mb-4 text-black/20" />
                        <p className="text-xl font-bold text-black/40">Video Stream Area</p>
                        <p className="text-sm text-black/30">Main presenter view</p>
                    </div>
                </Card>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                    <Button
                        variant={isMicOn ? 'solid-brutal' : 'outline'}
                        size="lg"
                        onClick={() => setIsMicOn(!isMicOn)}
                        aria-label={isMicOn ? 'Mute microphone' : 'Unmute microphone'}
                    >
                        {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </Button>
                    <Button
                        variant={isCameraOn ? 'solid-brutal' : 'outline'}
                        size="lg"
                        onClick={() => setIsCameraOn(!isCameraOn)}
                        aria-label={isCameraOn ? 'Turn off camera' : 'Turn on camera'}
                    >
                        {isCameraOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
                    </Button>
                    <Button variant="outline" size="lg" aria-label="Share screen">
                        <Share2 className="w-5 h-5" />
                    </Button>
                    <Button
                        variant={isHandRaised ? 'solid-brutal' : 'outline'}
                        size="lg"
                        onClick={() => setIsHandRaised(!isHandRaised)}
                        aria-label={isHandRaised ? 'Lower hand' : 'Raise hand'}
                    >
                        <Hand className="w-5 h-5" />
                    </Button>
                </div>

                {/* Participants */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Participants ({participants.length})</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {participants.map((participant) => (
                            <Card key={participant.id} variant="glass">
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        alt={participant.name}
                                        size="md"
                                        fallback={participant.name}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold truncate">{participant.name}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            {participant.role === 'host' && (
                                                <Badge variant="warning" size="sm">Host</Badge>
                                            )}
                                            {participant.isMicOn ? (
                                                <Mic className="w-3 h-3 text-green-600" />
                                            ) : (
                                                <MicOff className="w-3 h-3 text-red-600" />
                                            )}
                                            {participant.isCameraOn ? (
                                                <Camera className="w-3 h-3 text-green-600" />
                                            ) : (
                                                <CameraOff className="w-3 h-3 text-red-600" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
