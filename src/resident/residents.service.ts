import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
	Resident,
	Prisma
} from '@prisma/client';

@Injectable()
export class ResidentsService {
	constructor(private prisma: PrismaService) {}

	async create(data: Prisma.ResidentCreateInput) : Promise<Resident> {
		return this.prisma.resident.create({
			data,
		});
	}

	async findAll(): Promise<Resident[] | null> {
		return this.prisma.resident.findMany();
	}

	async findOne(residentWhereUniqueInput: Prisma.ResidentWhereUniqueInput) {
		return this.prisma.resident.findUnique({
			where: residentWhereUniqueInput,
		});
	}

	async update(params: {
	     where: Prisma.ResidentWhereUniqueInput,
	     data: Prisma.ResidentUpdateInput
	 }) {
		const { data, where } = params;
		return this.prisma.resident.update({
			data,
			where,
		});
	}

	async remove(where: Prisma.ResidentWhereUniqueInput) {
		return this.prisma.resident.delete({
			where,
		});
	}

}
