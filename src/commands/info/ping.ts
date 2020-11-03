import Command from '@inari/struct/bot/Command';
import { Message } from 'discord.js';

export default class extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'hello'],
            channel: 'guild',
            description: {
                content: 'Pings Inari.',
            },
        });
    }

    async exec(msg: Message) {
        const sent = await msg.channel.send('Pong!');
        const timeDiff =
            (sent.editedAt || sent.createdAt).getMilliseconds() -
            (msg.editedAt || msg.createdAt).getMilliseconds();
        return sent.edit(
            `🔂 **RTT**: ${timeDiff} ms\n💟 **Heartbeat**: ${Math.round(this.client.ws.ping)} ms`
        );
    }
}
