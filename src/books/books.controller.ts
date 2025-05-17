import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/books')
@UseGuards(JwtAuthGuard)
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Post() create(@Body() dto: CreateBookDto) {
    return this.service.create(dto);
  }

  @Get() findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
    return this.service.findAll(+page, +limit);
  }

  @Put(':id') update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
