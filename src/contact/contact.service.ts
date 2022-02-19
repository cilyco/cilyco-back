import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Contact } from '@prisma/client';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.ContactUncheckedCreateInput) : Promise<Contact> {
        return this.prisma.contact.create({
            data,
        });
    }
}
